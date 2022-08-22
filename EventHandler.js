class EventHandler
{
	constructor(inEvents)
	{
		this.events = inEvents;

	}//end constructor


	getEventsBetweenDates(start, end)
	{
		return this.events.filter((event) => 
		{
			
			return ((event.dateStart >= start)&&(event.dateEnd<=end));
		});

	}//end function

	getUniqueCreator()
	{
		return quizzes.reduce((accumulator, currValue) =>
		{
			if(accumulator.every((quiz) => {return quiz.creator != currValue.creator})) accumulator.push(currValue);
			return accumulator;

		}, []);

	}//end function

	getDescriptions(args)
	{
		let list;
		// if given array of objects is provided
		if(args && arguments[0].constructor === Array) 
			list = arguments[0];
		// if list of objects is provided, use that, otherwise use member variable
		else list = args ? Array.prototype.slice.apply(arguments) : this.quizzes;

		return list.map((quiz) =>
		{
			return quiz.quiz + " (created by: " + quiz.creator + "): " + quiz.score + "%";
		});

	}//end function

}//end class