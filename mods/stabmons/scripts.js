exports.BattleScripts = {
	init: function() {
		console.log('stabmons init');
		for (var i in this.data.Learnsets) {
			for (var n in this.data.Movedex) {
				for (var t in this.data.Pokedex[i].types) {
					if (this.data.Movedex[n].type === this.data.Pokedex[i].types[t]) {
						this.data.Learnsets[i].learnset[this.data.Movedex[n].id] = ["5L1"];
					}
				}
			}
		}
	}
};