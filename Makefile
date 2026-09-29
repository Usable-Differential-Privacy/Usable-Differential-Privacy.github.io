.PHONY: build serve clean

SERVE_HOST ?= 127.0.0.1
SERVE_PORT ?= 5000

build:
	jekyll build

serve:
	jekyll serve --port $(SERVE_PORT) --host $(SERVE_HOST)

clean:
	$(RM) -r _site .jekyll-cache
