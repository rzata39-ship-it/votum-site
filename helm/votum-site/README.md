# votum-site Helm chart

## Build and push the image

```bash
docker build -t <your-registry>/votum-site:<tag> .
docker push <your-registry>/votum-site:<tag>
```

## Install to dev

```bash
helm upgrade --install votum-site ./helm/votum-site \
  --namespace votum-dev \
  --create-namespace \
  --set image.repository=<your-registry>/votum-site \
  --set image.tag=<tag>
```

The default ingress host is:

- `votum.dev.polygran.io`

If your cluster handles TLS differently, update `ingress.tls` and annotations in `values.yaml`.

## Install to prod (votum.bg)

```bash
helm upgrade --install votum-site ./helm/votum-site \
  -f ./helm/votum-site/values-prod.yaml \
  --namespace votum-prod \
  --create-namespace
```

This serves `votum.bg` and `www.votum.bg` over plain HTTP inside the cluster. TLS is terminated
upstream at the pfSense/HAProxy load balancer (same as `votum.dev.polygran.io`), using a
certificate issued by OPNsense's own ACME client (HTTP-01), not cert-manager — the HAProxy
frontend routes both hosts to the `k8s-ingress-http` backend pool.
