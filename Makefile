build:
	node_modules/.bin/pug -o _layouts _pug/post.pug _pug/index.pug _pug/blog.pug _pug/film.pug _pug/films.pug _pug/film_post.pug
	jekyll build
	rm _site/Makefile _site/README.md

serve:
	node_modules/.bin/pug -o _layouts _pug/post.pug _pug/index.pug _pug/blog.pug _pug/film.pug _pug/films.pug _pug/film_post.pug
	jekyll serve -w
	rm _site/Makefile _site/README.md

clean:
	rm -rf *~ *# _site/ _layouts/*
