class View {
    constructor(data) {
        this.data = data;
    }

    render() {
        $("ul.todos").empty();

        this.data.forEach((row) => {
            $("ul.todos").append(
                `<li class="todo"> 
                        <input class="task-checkbox" type="checkbox" id="${row.id}" name="${row.id}"> 
                        <span> ${row.title}</span> 
                        <i class="prio-icon ${row.prio}"></i>
                </li>`);
            $("#" + row.id).prop('checked', row.checked);
        });

        $(".task-checkbox").click((e) => {
            let checkBoxID = e.target.id;
            let event = $.Event("clickedTodoItem");
            event.checkBoxID = checkBoxID;
            $('body').trigger(event);

        })
    }

    updateView(data) {
        this.data = data;
        this.render();

        console.log("\n%cYour list was updated:", "color: red; font-family: sans-serif; font-size: 14px; font-weight: bolder;");

        this.data.forEach((row, i) => {
            let statusString = row.checked ? '"' + row.title + '" - \t\t Done!' : '"' + row.title + '" - \t\t Not done!';

            console.log("-\t" + statusString);
        });
    }
}