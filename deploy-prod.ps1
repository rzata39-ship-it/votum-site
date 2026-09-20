# PowerShell script for deploying votum.bg (production)
# Reuses the existing votum-site-dev image; only the Helm release/namespace/host differ.

# Upgrade or install Helm chart into the prod namespace
helm upgrade --install votum-site ./helm/votum-site -f ./helm/votum-site/values-prod.yaml -n votum-prod --create-namespace

# Restart the deployment to pick up the latest image
kubectl rollout restart deployment votum-site-votum-site-prod -n votum-prod
