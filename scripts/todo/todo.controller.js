class Controller {
    constructor() {
        this.eventBinding();
        this.generateModel();
        this.checkedCheckBoxID = '';
    }

    eventBinding() {
        let vm = this;
        $('body').on('clickedTodoItem', function (e) {
            vm.checkedCheckBoxID = e.checkBoxID;
            vm.onCheck(vm.checkedCheckBoxID);

        });
        $('body').on('todoListFetched', function (e) {
            vm.data = e.todos;
            vm.generateView();
            vm.init();
        });
    }

    generateModel() {
        this.model = new Model();
        this.model.fetchData('service-response/items.json');
    }

    generateView() {
        this.view = new View(this.data);

    }

    init() {
        this.view.render();
    }

    onCheck(id) {
        this.model.updateData(id);
        this.data = this.model.getData();
        this.view.updateView(this.data);
    };
}