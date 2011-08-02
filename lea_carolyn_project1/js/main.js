function doChange(srcE, targetId){
	
	var val = srcE.options[srcE.selectedIndex].value;
	var targetE = document.getElementById(targetId);
	alert("You have chosen " + val + ".  Press ok to continue.");
	removeAll(targetE);
	if(val == 'animal')
	{
		addOption('bears', targetE);
		addOption('crabs', targetE);
		addOption('fish', targetE);
		addOption('lions', targetE);
		addOption('rats', targetE);
		addOption('wolves', targetE);	

	}
	else if(val == 'human')
	{
		addOption('bandits', targetE);
		addOption('conjurers', targetE);
		addOption('marauders', targetE);
		addOption('necromancers', targetE);
		addOption('quest giver', targetE);
		addOption('trainer', targetE);
	}
	else if(val == 'mythic')
	{
		addOption('goblins', targetE);
		addOption('imps', targetE);
		addOption('minotaurs', targetE);
		addOption('ogres', targetE);
		addOption('unicorn', targetE);
	}
	else if(val == 'undead')
	{
		addOption('skeletons', targetE);
		addOption('vampires', targetE);
		addOption('wraiths', targetE);
		addOption('zombies', targetE);
	}
 };

function addOption(value, e){
	
	var o = new Option(value);
	try
	{
		e.add(o);
	}
	catch(ee)
	{
		e.add(o, null);
	}
};
 
function removeAll(e){
	
	for(var i = 0, limit = e.options.length; i < limit - 1; ++i)
	{
		e.remove(1);
	}
};