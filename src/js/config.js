/**
 * Created by cform on 17/2/10.
 */
export default {
    /**
     * 满减
     */
    subtract: {
        api: 'http://localhost:3000/promotion-subtract',
        type: 'POST',
    },
    /**
     * 打折
     */
    discount: {
        api: 'http://localhost:3000/promotion-discount',
        type: 'POST',
    },
    /**
     * 满赠
     */
    grant: {
        api: 'http://localhost:3000/promotion-grant',
        type: 'POST',
    }
};