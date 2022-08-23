class EventHandler
{
	constructor(inEvents)
	{
		this.events = inEvents;

	}


	getEventsBetweenDates( start, end)
	{
		return this.events.filter((event) => 
		{
			
			return event.dateStart>=start&&event.dateStart<=end;
		});

	}

	getByMonth(month)
	{
		return this.events.filter((event) =>
		{
			var getMonth = event.dateStart.substring(5,7);
				
			return getMonth==month;
		});

	}

	getDescriptions()
	{
		return events.sort(function(a, b) {
			return a.dateStart.localeCompare(b.dateStart);
		  }).reduce((returnArray, currentIterationEvent) =>
		{
			if(returnArray.every((event) => {return ((event.dateStart != currentIterationEvent.dateStart)||(event.dateEnd!=currentIterationEvent.dateEnd))})) returnArray.push(currentIterationEvent);
			return returnArray;

		}, []).sort(events.dateStart);

	}//end function

}//end class