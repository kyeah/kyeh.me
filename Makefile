build:
	jade -o . _layouts/* 
	jekyll build
	rm _site/Makefile

serve:
	jade -o . _layouts/*
	jekyll serve -w

clean:
	rm -rf *~ *# *.html _site/
