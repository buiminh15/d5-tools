import saveAs from "file-saver";
import streamSaver from "streamsaver";

export const featureMixin = {
    props: {
        feature: {
            type: Object,
            required: true
        }
    },
    metaInfo() {
        return {
            title: this.feature.meta.title,
            meta: [{
                name: "description",
                content: this.feature.meta.tag
            }]
        }
    },
    methods: {
        downloadFileFromClient(filename, text) {
            const blob = new Blob([text], {
                type: "text/plain;charset=utf-8"
            });
            saveAs(blob, filename, {
                autoBom: true
            });
        },
        async downloadFileFromServer(filename, response) {
            const fileStream = streamSaver.createWriteStream(filename);
            await response.body.pipeTo(fileStream);
        },
      
    },
    watch: {
        number() {
            this.number = +this.number.toString().slice(0, 6);
        }
    }
};