function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}
function back() {
	return this.dataStore[this.dataStore.length-1];
}

function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}


//sort based on the queue
function distribute(nums, queues, n, digit) {
	for (var i = 0; i < n; ++i) {
		if (digit == 1) {
			queues[nums[i]%10].enqueue(nums[i]);
		}
		else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}

function collect(queues, nums) {
	var i = 0;
	for (var digit = 0; digit < 10; ++digit) {
		while (!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function dispArray(arr) {
	for (var i = 0; i < arr.length; ++i) {
		putstr(arr[i] + " ");
	}
}

//priority queue
function priorityQueue(code) {
    this.code = code;
}

var pQ = new priorityQueue(1);
var q = new Queue();
q.enqueue(pQ);
q.dequeue();

function dequeue() {
	var priority = this.dataStore[0].code;
	var queueEl = 0;
	for (var i = 1; i < this.dataStore.length; ++i) {
		if (this.dataStore[i].code < priority) {
			priority = this.dataStore[i].code;
			queueEl = i;
		}
	}
	return this.dataStore.splice(queueEl,1);
}

