build:
	jade -o . _layouts/index.jade
	jade -o _layouts _layouts/blog.jade
	jekyll build
	rm _site/Makefile

serve:
	jade -o . _layouts/index.jade
	jade -o _layouts _layouts/blog.jade
	jekyll serve -w
	rm _site/Makefile

clean:
	rm -rf *~ *# *.html _site/
