build:
	jade -o _layouts _jade/post.jade _jade/index.jade _jade/blog.jade _jade/film.jade
	jekyll build
	rm _site/Makefile _site/README.md

serve:
	jade -o _layouts _jade/post.jade _jade/index.jade _jade/blog.jade _jade/film.jade
	jekyll serve -w
	rm _site/Makefile _site/README.md

clean:
	rm -rf *~ *# _site/ _layouts/*
