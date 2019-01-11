FROM playfulcorgi/faas-node:0.12.0
COPY . ./
RUN yarn install
ENV HANDLER_FILE_SUBPATH="dist/index.js"
CMD [ "/app/run.sh" ]
