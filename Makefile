APP_DIR := /home/sdebenedictis/Documenti/Progetti/sdb-app/
SKETCHES_DIR := sketches

format:
	npm run format

lint:
	npm run lint

format-lint: format lint

build-sketch:
	cd ${SKETCHES_DIR} && ${APP_DIR}/scripts/build.sh ${ID}