import alt from "alt-server";

alt.on("playerConnect", (player) => {
	player.spawn(0, 0, 5);
});