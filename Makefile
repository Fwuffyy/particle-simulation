.PHONY: build

build: ./src/index.ts
	@bun build ./src --outfile ./dist/bundle.js --minify