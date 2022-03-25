git:
	git add .
	git commit -m "$m"
	git push -u origin main
deploy:
	npm run build
	firebase deploy
