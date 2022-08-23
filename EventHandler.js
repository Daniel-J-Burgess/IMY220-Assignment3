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

	getUniqueDateAndSort()
	{
		return events.sort(function(a, b) {
			return a.dateStart.localeCompare(b.dateStart);
		  }).reduce((returnArray, currentIterationEvent) =>
		{
			if(returnArray.every((event) => {return ((event.dateStart != currentIterationEvent.dateStart)||(event.dateEnd!=currentIterationEvent.dateEnd))})) returnArray.push(currentIterationEvent);
			return returnArray;

		}, []).sort(events.dateStart);

	}//end function

	getSummary(optional){
		var myReturnArray=[];
		if (optional!=null) {
			console.log(1);
			if (optional.constructor ===Array) {
				console.log(1.1);
				return optional.map((test)=>{
					console.log("yes");
					if (test.dateStart==test.dateEnd) {
						return "On "+test.dateStart+":"+test.name+"("+test.description+")";
					}else{
						return "From "+test.dateStart+" to "+test.dateEnd+":"+test.name+"("+test.description+")";
					}
				})
				console.log("t");
			}else{
				console.log(1.2);
				if (optional.dateStart==optional.dateEnd) {
					return "On "+optional.dateStart+":"+optional.name+"("+optional.description+")";
				}else{
					"From "+optional.dateStart+" to "+optional.dateEnd+":"+	optional.name+"("+optional.description+")"
				}
			}			
		} else {
			console.log(2);
			events.every((event)=>{
				if (event.dateStart==event.dateEnd) {
					myReturnArray.push("On "+event.dateStart+":"+event.name+"("+event.description+")");
				}else{
					myReturnArray.push("From "+event.dateStart+" to "+event.dateEnd+":"+event.name+"("+event.description+")");
				}
			})
		}
		return myReturnArray;
	}
}//end class