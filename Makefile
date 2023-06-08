include .env
export

format:
	npm run format

lint:
	npm run lint

format-lint: format lint

build-sketch:
	npx canvas-sketch ${SKETCH_PATH}/${SKETCH_NAME}.js --build --dir ./public/pages/${SKETCH_NAME}/

_build-covers-and-index:
	npm run test-e2e

build-covers-and-index: _build-covers-and-index format-lint

install:
	npm install

run:
	npm run start

build-app:
	npm run build

deploy:
	npm run deploy