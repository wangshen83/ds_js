function Node(element) {
	this.element = element;
	this.next = null;
}

function LList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findPrevious = findPrevious;
}

function find(item) {
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function findPrevious(item) {
	var currNode = this.head;
	while (!(currNode.next == null) &&
		(currNode.next.element != item)) {
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item) {
	if(this.head.element == item){
		this.head = this.head.next;
	}else{
		var prevNode = this.findPrevious(item);
		if (!(prevNode.next == null)) {
			prevNode.next = prevNode.next.next;
		}
	}	
}
