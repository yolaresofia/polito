git:
	git add .
	git commit -m "$m"
	git push -u origin master
deploy:
	npm run build
	firebase deploy
