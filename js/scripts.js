function TaskList() {
	this.tasks = {}
	this.currentNumber = 0;
}

TaskList.prototype.assignNumber = function() {
	this.currentNumber +=1;
	return this.currentNumber;
};

TaskList.prototype.addTask = function(task) {
	task.number = this.assignNumber();
	this.tasks[task.number] = task;
};

TaskList.prototype.findTask = function(number) {
	if (this.task.number != undefined) {
		return this.tasks[number];
	}
	return false;	
};

TaskList.prototype.deleteTask = function(number) {
	if(this.tasks[number] === undefined) {
		return false;
	}
	delete this.tasks[number];
	return true;
};

function Task(nameOfTask, taskDone, supplies) {
	this.nameOfTask = nameOfTask;
	this.taskDone = "incomplete"
	this.supplies = supplies;
}

Task.prototype.complete = function(taskDone){
	this.taskDone = "complete"
	return "Great job, this is complete!"
};

