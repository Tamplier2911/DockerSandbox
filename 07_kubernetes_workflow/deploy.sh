docker build -t tamplier2911/multi-client:latest -t tamplier2911/multi-client:$GIT_SHA -f ./client/Dockerfile ./client
docker build -t tamplier2911/multi-server:latest -t tamplier2911/multi-server:$GIT_SHA -f ./server/Dockerfile ./server
docker build -t tamplier2911/multi-worker:latest -t tamplier2911/multi-worker:$GIT_SHA -f ./worker/Dockerfile ./worker

docker push tamplier2911/multi-client:latest
docker push tamplier2911/multi-server:latest
docker push tamplier2911/multi-worker:latest

docker push tamplier2911/multi-client:$GIT_SHA
docker push tamplier2911/multi-server:$GIT_SHA
docker push tamplier2911/multi-worker:$GIT_SHA

kubectl apply -f k8s
kubectl set image deployments/multi-client-deployment client=tamplier2911/multi-client:$GIT_SHA
kubectl set image deployments/multi-server-deployment server=tamplier2911/multi-server:$GIT_SHA
kubectl set image deployments/multi-worker-deployment worker=tamplier2911/multi-worker:$GIT_SHA