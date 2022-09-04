const AWS = require("aws-sdk");

const s3 = new AWS.S3()

async function getS3SignedURL(objectKey) {
    const signedURL = await s3.getSignedUrlPromise('getObject', {
        Bucket: process.env.S3_PERSISTENCE_BUCKET,
        Key: objectKey,
        Expires: 60*6
    });

    return "https://65c698eb-204d-4832-9da4-13ac96cba516-us-east-1.s3.us-east-1.amazonaws.com/Media/sounds/tic.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLWVhc3QtMSJIMEYCIQD5gSQWhbVxS4oxIg%2B03iy1DqOdpU7oQPXnULXDahxCqQIhAKtRjlioKJTTjVCImsdHN3kh2gHs3PjHp%2FQ%2BZ8%2B7vFz3KuwCCMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDMxMTM0OTg0ODA1IgyY6OL%2B075%2FAfjF084qwAJA72f17wHKHn8QixySPwIihmlmVUpYh2AifH2C5K4NYbCYDZI%2BFCWGD6JUFg39AneVi92ZDk76%2F0LCOtrziBbvcOF580eMaobCpnxC%2FUZMbA%2FRKmqBi6fGfNqe2zghdVOLLvyIFbdCiPE%2BuWI33GKvkAQt4pT1AufFtYe702G3pg6caSVedeTjjOlQHucu8PaAoCEywjN4GnVCfnEkwieFecU0TNQNMs2ZHq5Xp2yrl0lLmvx7QV%2BYQ9dTmGkpKer1qs0w61Kq1ya%2FrsiXOj%2BVjoYgpAJ3Z4D5iT4CA4PA4Ts8dY54uPRenqGSm53WtJWG%2FMb7%2BrFFYwBsPEv38LtRr2TjQO%2FVH0F5qPm6ihs%2BglLHwTwz2YFadMc0IytXFTiyJ8Ti0vUyRtUjMxOYtC9XFe8NKIuXuhRLQ4XutJYevjCG6tSYBjqGAqrX4F9xZd%2BeQmRIJQ%2FqPfyoRTRTAPF%2BCx0z%2Bmr4%2Bdgo9ICBFSzHEN0fSF896DO7t7MzYPeyh2Y%2BZBzDVa2MkCP7aIUje6IJEPOx51EiUjAlI%2B7lAC3jlu81AeteaG0XxJtURHV6U70sVA%2Bj4AfJDIEmFyC90FLUxKz0wXFdGHE%2BT2NBXIDJ35a%2F4jFUIBI3Z0jEa1WCIr1AIW0lAcrYmgIWEq57oONdDI6AA5rjeiUD71YDegPuoEjHLUaI5AArgXQE15TCuP5z6ri1Hmbbt9QwdZMucf%2BjrMWRAR2DTGqQWgtVV0AvEo5Pe8q637nPLJ%2BmZCGfljiweD5LcXylG9vDCvBrU3g%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220904T233024Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQOP6KFJSWAXPREPL%2F20220904%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=517d0cdf24e125b5f2fc58601036643bc443332dd7ff3c96e90c24173d4b530b" || signedURL;
}


module.exports = getS3SignedURL;