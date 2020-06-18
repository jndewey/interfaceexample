
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


function adjust_quantity(number_sold: number, quantity: number): number{
    let adjusted_quantity = quantity - number_sold
    return adjusted_quantity
}

declare interface Inventory {
    product_number : number;
    product_description : string;
    quantity: number;
    
}
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    let oil_filter = {product_number:101, product_description: 'oil filter for Tesla', quantity: 10, adjust_quantity: adjust_quantity(0, 0)}
    export function new_quantity(product: Inventory, num_sold:number): void {
        let adjusted_qauntity = adjust_quantity(product.quantity, num_sold)
        console.log(adjusted_qauntity)
    }

}
