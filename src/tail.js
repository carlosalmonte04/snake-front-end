const Tail = (function(){
    let tailBlocks = []
    let idCounter = 0
    return class Tail {
        constructor(snakeHead) {
            this.snakeHead = snakeHead
            // this.snakeHead.snakeTailBlocks.push(this)
            this.setBearingAndCoordinates()
            tailBlocks.push(this)
            this.moves = []
            this.id = idCounter++
            console.log("coordinates of move:", this.moves[0])
            console.log("coordinates",this.coordinates)
            console.log("bearing", this.bearing)
            console.log("snake head bearing", this.snakeHead.bearing)
        }

        static tailBlocks(){
            return tailBlocks
        }

        static renderAll(){
            return this.tailBlocks().map(tail => tail.render()).join('')
        }

        setBearingAndCoordinates() {
            let tailBearing = ''
            if (tailBlocks.length === 0) {
                this.bearing = this.snakeHead.bearing.slice()
                this.coordinates = this.snakeHead.coordinates.slice()
            }
            else {
              // debugger
                this.bearing = tailBlocks[tailBlocks.length - 1].bearing.slice()
                this.coordinates = tailBlocks[tailBlocks.length - 1].coordinates.slice()

            }
            switch (this.bearing) {
              case "up":
                  console.log("case up")
                  this.coordinates[1] += 30
                  break;

              case "right":

                console.log("case right")

                  this.coordinates[0] -= 30
                  break;

              case "down":
              console.log("case down")

                  this.coordinates[1] -= 30
                  break;

              case "left":
              console.log("case left")

                  this.coordinates[0] += 30
                  break;
              }

        }


        // at(x, y) {
        //     this.coordinates = [x, y];
        // }
        static advanceAll() {
          tailBlocks.forEach(tailBlock => tailBlock.advance())
        }

        advance() {

        if (this.moves.length > 0) {
          // debugger
          if (this.coordinates[0] === this.moves[0].coordinates[0] && 
            this.coordinates[1] === this.moves[0].coordinates[1]){
              this.bearing = this.moves[0].bearing
              this.moves.shift()
          }
        }
            switch (this.bearing) {
                case "up":
                    this.coordinates[1] -= 15
                    break;

                case "right":
                    this.coordinates[0] += 15
                    break;

                case "down":
                    this.coordinates[1] += 15
                    break;

                case "left":
                    this.coordinates[0] -= 15
                    break;
            }
        }
        render() {
        	// let renderHTML =
        	return `
        	<div class="tail" id="tail-${this.id}" style="left: ${this.coordinates[0]}px; top: ${this.coordinates[1]}px">
            </div>
        	`
        }
        static deleteAll() {
            $('.tail').remove()
        }

    }
})()
