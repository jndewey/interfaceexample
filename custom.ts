
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


function adjustQuantity(number_sold: number, quantity: number): number{
    let adjusted_quantity = quantity - number_sold
    return adjusted_quantity
}

declare interface Inventory {
    product_number : number;
    product_description : string;
    quantity: number;
    
}
  let oil_filter = {product_number:101, product_description: 'oil filter for Tesla', quantity: 10, adjust_quantity: adjust_quantity(0, 0)}
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace inventory_manager {
   /**
     * Registers code to run when the radio receives a number.
     */
    //% blockId=inventory block="calculate new inventory" blockGap=16
    //% draggableParameters=num_sold
    export function new_quantity(product: Inventory, num_sold:number): void {
        let adjusted_qauntity = adjustQuantity(product.quantity, num_sold)
        console.log(adjusted_qauntity)
    }

}
