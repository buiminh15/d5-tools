import CaseConverter from '../views/features/CaseConverter'
import DataComparer from '../views/features/DataComparer'
import DataGenerator from '../views/features/DataGenerator'
import FileGenerator from '../views/features/FileGenerator'
import GuidGenerator from '../views/features/GuidGenerator'
import PairwiseGenerator from '../views/features/PairwiseGenerator'
import PictureGenerator from '../views/features/PictureGenerator'
import TextGenerator from '../views/features/TextGenerator'
import TestcaseFileGenerator from '../views/features/TestcaseFileGenerator'

export const features = [{
    title: "Data generator",
    subTitle: "Create any data sets you need",
    description: "If you have ever worked with API testing, you must know that it may take so much time to create the " +
        "body with the exact data you need for your API requests! " +
        "Well, we have handled this problem for you. With this random Data Generator Tool Online, you can create " +
        "always any data you need in a couple of clicks. And it is free! It is now easy for you to generate extra keys, etc. " +
        "We tried our best to make it very flexible and simple for making samples or dumb data for your testing purposes. " +
        "And what is most amazing, this free generator is going to help you if you send API calls both manually or in automation tests. " +
        "Make your testing more pleasant by avoiding boring moments of creating data for your testing.",
    icon: ["fas", "list-alt"],
    path: "/data-generator/",
    name: "data-generator",
    meta: {
        layout: "main",
        title: "Random Data Generator Tool Online",
        tag: "This Generator will allow you to create any data you may need for your testing purposes. " +
            "For example, if you need to create a body for your API request, this Generator will do it for you in seconds!"
    },
    component: DataGenerator
},
{
    title: "Pairwise generator",
    subTitle: "Create pairwise or all combinations of your parameters",
    description: "Pair testing is a technique for generating test data sets. " +
        "You can formulate the essence, for example, like this: the formation of such data" +
        " sets in which each tested value of each of the checked parameters is combined" +
        " at least once with each tested value of all other checked parameters. " +
        "This approach is approximately the essence of this technique - " +
        "it does not check all combinations of all values, but checks all pairs of values. " +
        "Using the online tool Pairwise Testing, you can conduct combinatorial testing for any system in unlimited quantities. " +
        "With this special generator, you can save your time and money allocated for your project, as well as increase the " +
        "percentage of the test coverage and the quantity of defects found during verification. " +
        "Pairwise Testing will also help to lower the number of test cases completed. You can use the convenient tool right now on our website.",
    icon: ["fas", "check-square"],
    path: "/pairwise-generator/",
    name: "pairwise-generator",
    meta: {
        layout: "main",
        title: "Pairwise testing - Online tool",
        tag: "Pairwise Testing - is an online tool for checking possible discrete combinations of parameters. " +
            "Using combinatorial testing, you can easily and quickly test any system."
    },
    component: PairwiseGenerator
},
{
    title: "GUID generator",
    subTitle: "Generate and validate GUIDs",
    description: "You can generate a random GUID Online using our GUID generator. " +
        "Usually, GUID is needed to identify rows in your DB (database), entity, or a serial number, etc. " +
        "For many of us, the GUID number is just a simple random 128-bit quantity of numbers that are normally printed out in a particular format. " +
        "But there are, actually, a few different types of GUIDs, and each of them is following a specific structure as described in RFC 4122. " +
        "Using our generator you can save your time without googling any extra identifiers, " +
        "and generate fake guid here in several seconds! Please, feel free to test and validate a GUID. We have tried to " +
        "make a very flexible generator, so you could use it in most spread cases with testing where are GUIDs needed.",
    icon: ["fas", "dice-four"],
    path: "/guid-generator/",
    name: "guid-generator",
    meta: {
        layout: "main",
        title: "Generate a Random GUID Online",
        tag: "You can use the GUID for your own purposes, for example, " +
            "like this: row identifier in the database, entity identifier, serial number of something."
    },
    component: GuidGenerator
},
{
    title: "Random text generator",
    subTitle: "Create dummy text for all your layout needs",
    description: "This generator allows to generate random text for testing purposes. " +
        "If you are the QA Engineer, you, probably, have needed at least once to paste any dummy text to test " +
        "the field in the site, or to test any function, or feature, etc. It takes time to find any random text with exact " +
        "symbols or words you need. But with our generator you can create random text in several seconds. " +
        "Usually, the most often used dummy text is the text which begins with \"Lorem Ipsum\". " +
        "We use this text for our generator too. All our generators are created by testers, so we " +
        "truly believe that this random symbols generator will save your time.",
    icon: ["fas", "pen-square"],
    path: "/text-generator/",
    name: "text-generator",
    meta: {
        layout: "main",
        title: "Random text generator - Fast random text for web or typography",
        tag: "This text generator will allow you to create a dummy text that you can use for testing any software."
    },
    component: TextGenerator
},
{
    title: "Case converter",
    subTitle: "Convert your text to different cases",
    description: "This service is designed to change the text between uppercase and lowercase. And for this, the user just needs to enter the text," +
        " select the option - in which register you want to translate the text, and then click the \"Translate\" button. " +
        "When creating text documents, they almost always type them in letters of two sizes - uppercase and lowercase. " +
        "On a computer, this separation corresponds to case switching, which can be upper or lower. Unlike paper documents, the register in electronic " +
        "texts allows you to make changes after creating the text. Uppercase to lower case will always help the register converter. " +
        "This means that a small online service will be able to turn text to all caps, as well as replace the capital letters with small ones, " +
        "delete the capital letters, change the case of letters. And for this, it is enough to " +
        "insert the text for translation into the form or print it directly in the form.",
    icon: ["fas", "plus-square"],
    path: "/case-converter/",
    name: "case-generator",
    meta: {
        layout: "main",
        title: "Convert case online - Change text between uppercase and lowercase",
        tag: "Convert case online allows you to translate text in lower case, " +
            "in uppercase online, make each word in a sentence with a capital letter."
    },
    component: CaseConverter
},
{
    title: "Random file generator",
    subTitle: "Create files in several formats and sizes",
    description: "This random file generator allows to create a random TXT file or DOC file. " +
        "Sometimes, QA Engineers need  to upload any file for testing purposes. " +
        "Usually it takes time to prepare in your windows many fake file sizes or waste your " +
        "time by finding files in the internet with sizes you need. This site has been created by the testers, so we understand how much " +
        "time can it take to create dummy files or to find random data file creator, and that's why we " +
        "have thought about it and created our own dummy file creator to save your time. " +
        "So now you can easily select which file format and file size you need to generate. Feel free to use corrupted files!",
    icon: ["fas", "poll-h"],
    path: "/file-generator/",
    name: "file-generator",
    meta: {
        layout: "main",
        title: "File generator - Create random dummy files with a specific size",
        tag: "This generator will create a file with your specific needs. Use our generator instead of wasting your time by looking for the files you need."
    },
    component: FileGenerator
},
{
    title: "Image generator",
    subTitle: "Create images of any size",
    description: "Long wanted to learn how to create high-quality images? " +
        "Then Image generator is what you need. Just go in, choose a picture, and do whatever you want with it. " +
        "You can change the size, choose a format for downloading the image, and even with the help of the service " +
        "you can apply text of any available color and change the background of the picture. " +
        "Here you can simply, conveniently and quickly get a high-quality image online. The service is free - you can use it without restrictions. " +
        "For the convenience of users, there is a preview of the resulting image. Before downloading, you can look at the result. " +
        "And only then download free dummy pictures in the right size and format. Besides, there are several great features on top, " +
        "including Data generator, GUID generator, and others. If you were looking for where to create and download fake, dummy pictures, " +
        "then it is better not to find the Image generator. And why look, when everything is there too.",
    icon: ["fas", "border-all"],
    path: "/image-generator/",
    name: "image-generator",
    meta: {
        layout: "main",
        title: "Image generator - Download free dummy pictures",
        tag: "With the help of the Image generator, you can create any fake photo free online. " +
            "The service allows you to make a picture of any size and format for download."
    },
    component: PictureGenerator
},
{
    title: "Data comparer",
    subTitle: "Compare your data and find differences between them",
    description: "Sometimes you need to check if have there been any changes in your text, code or whatever data format it is. " +
        "If you have ever done that before, you must know that this process must be done very thoroughly and takes so much time. " +
        "Also, if you have to compare your data and it is quite big, the process of comparison will tire you so much. " +
        "That's why we have created a new diff online tool for issues that are similar for the one from above. Now you just need to paste the old data and updated data, then data comparer will do everything. " +
        "You can compare data online in JSON, XML, CSV, YAML, TXT, ARRAY, CSS formats. These formats are the most common cases for comparison. " +
        "From now on you can find differences in your updated data for a couple of seconds.",
    icon: ["fas", "window-close"],
    path: "/data-comparer/",
    name: "data-comparer",
    meta: {
        layout: "main",
        title: "Data comparer - Diff tool to compare your data free and online",
        tag: "With the help of the Data comparer, you can compare data online in JSON, XML, CSV, YAML, TXT, ARRAY, CSS formats and find differences between them. It's a free and online tool."
    },
    component: DataComparer
},
{
    title: "Testcase file generator",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus lorem.",
    description: "Aenean vel accumsan nulla, ac efficitur dui. Duis vitae efficitur est. Sed lorem sem, sodales quis eros imperdiet, dignissim mattis felis. " +
        "Duis orci nulla, varius a velit at, consectetur placerat est. Duis molestie, augue a imperdiet sodales, nulla velit lobortis elit, nec sollicitudin leo mi ac est. Cras id ante et augue sodales aliquam. Donec luctus dui augue, eleifend scelerisque enim pharetra ac. Sed sollicitudin, odio at auctor sodales, nisi urna tincidunt magna, et sollicitudin leo lectus sed mauris. Phasellus tristique dolor enim, sed dignissim augue malesuada interdum. " +
        "Praesent vestibulum dui sit amet eros fermentum euismod. Integer at interdum lorem.  ",
    icon: ["fas", "window-close"],
    path: "/testcase-file-generator/",
    name: "testcase-file-generator",
    meta: {
        layout: "main",
        title: "Data comparer - Diff tool to compare your data free and online",
        tag: "With the help of the Data comparer, you can compare data online in JSON, XML, CSV, YAML, TXT, ARRAY, CSS formats and find differences between them. It's a free and online tool."
    },
    component: TestcaseFileGenerator
},
];

