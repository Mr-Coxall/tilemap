namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.playUntilDone()
})
tiles.setTilemap(tiles.createTilemap(
            hex`10001000010101010101010101010b0b0b0b0b0b010101010101010101010b0b0b0b0b0b010101010101010101010b0b0b0b0b0b010101010101010101010b0b0b0b0b0b010101010101010101010b0b0b0b0b0b010101010101010101010101010b0b0b010101010101010101010101010b0b0b020505050505050505050505050505080307070707070707070707070707070a0307070707070707070707070707070a040606060606060606060606060606090101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(50, 160)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
music.setVolume(58)
music.baDing.play()
game.onUpdate(function () {
	
})
