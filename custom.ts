
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

function adjust_quantity(number_sold: number, quantity: number): number{
    let adjusted_quantity = quantity - number_sold
    return adjusted_quantity
}

declare interface Inventory {
    product_number : number;
    product_description : string;
    quantity: number;
    adjust_quantity(number_sold: number, quantity: number):number;
    
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
    export function report_new_quantity(product: Inventory, num_sold:number): void {
        let adjusted_qauntity = adjust_quantity(product.quantity, num_sold)
        console.log(adjusted_qauntity)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
