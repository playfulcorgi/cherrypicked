FROM playfulcorgi/faas-node
COPY . ./
RUN yarn install
ENV HANDLER_FILE_SUBPATH="dist/index.js"
CMD [ "/app/run.sh" ]
