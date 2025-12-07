Lab5 - Mini-Projet DevOps : Déploiement Orchestré d'une Application 3-tiers

Structure:
- backend/: Node.js API
- frontend/: React app source
- k8s/: Kubernetes manifests
- .github/workflows/ci-cd.yml : GitHub Actions pipeline

Instructions:
1. Build and push docker images (set DOCKER_USERNAME and DOCKER_PASSWORD as secrets)
2. Deploy to Minikube or any Kubernetes cluster:
   kubectl apply -f k8s/
3. Expose frontend:
   minikube service frontend
