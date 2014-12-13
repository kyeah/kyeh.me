build:
	jade -o _layouts _jade/post.jade _jade/index.jade _jade/blog.jade
	jekyll build
	rm _site/Makefile

serve:
	jade -o _layouts _jade/post.jade _jade/index.jade _jade/blog.jade
	jekyll serve -w
	rm _site/Makefile

clean:
	rm -rf *~ *# *.html _site/
