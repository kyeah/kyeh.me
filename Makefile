build:
	jade -o . _layouts/index.jade _layouts/blog.jade 
	jekyll build
	rm _site/Makefile

serve:
	jade -o . _layouts/*
	jekyll serve -w

clean:
	rm -rf *~ *# *.html _site/
