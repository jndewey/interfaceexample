
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


function adjustQuantity(number_sold: number, quantity: number): number{
    let adjusted_quantity = quantity - number_sold
    return adjusted_quantity
}

    


/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""

namespace inventory_manager {
    
export function adjustQuantity(number_sold: number, quantity: number): number{
    let adjusted_quantity = quantity - number_sold
    return adjusted_quantity
}
export declare interface Inventory {
    product_number : number;
    product_description : string;
    quantity: number;
    
}
    //% block
    const part = {product_number:101, product_description: "oil filter for Tesla", quantity: 10}

   /**
     * Registers code to run when the radio receives a number.
     */
    //% blockId=inventory block="calculate new inventory|%Inventory|%number" blockGap=16
    //% draggableParameters=num_sold
    export function new_quantity(product: Inventory, num_sold:number): void {
        let adjusted_qauntity = adjustQuantity(product.quantity, num_sold)
        console.log(adjusted_qauntity)
    }
    //% block
export function InventoryValues(c: number, g: string, h: number): Inventory{
return {product_number:c, product_description: g, quantity: h}
}
//% block
export function ReadInventory(): string{
return console.inspect("hi")
}
}
