docker build -t tamplier2911/multi-client -f ./client/Dockerfile ./client
docker build -t tamplier2911/multi-server -f ./server/Dockerfile ./server
docker build -t tamplier2911/multi-worker -f ./worker/Dockerfile ./worker
docker push tamplier2911/multi-client
docker push tamplier2911/multi-server
docker push tamplier2911/multi-worker
kubectl apply -f k8s
kubectl set image deployment/multi-client-deployment client=tamplier2911/multi-client