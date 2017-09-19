class Model {

    constructor() {
        this.responseData = {};
    }

    fetchData(url) {
        $.getJSON(url, (data) => {

        }).then(data => {
            this.responseData = data;
            let event = $.Event("todoListFetched");
            event.todos = this.responseData;
            $('body').trigger(event);
        });
    }

    updateData(checkBoxID){
        this.responseData.forEach((row) => {
            if (row.id == checkBoxID) {
                row.checked = !row.checked
            }
        });
    }

    getData() {
        return this.responseData;
    }

};