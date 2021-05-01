
import FileTranslator from '../views/featuresComtor/FileTranslator'
import LinkTranslator from '../views/featuresComtor/LinkTranslator'

export const featuresComtor = [
  {
    title: "File translator",
    subTitle: "Create any data sets you need",
    description: "If you have ever worked with API testing, you must know that it may take so much time to create the " +
      "body with the exact data you need for your API requests! " +
      "Well, we have handled this problem for you. With this random Data Generator Tool Online, you can create " +
      "always any data you need in a couple of clicks. And it is free! It is now easy for you to generate extra keys, etc. " +
      "We tried our best to make it very flexible and simple for making samples or dumb data for your testing purposes. " +
      "And what is most amazing, this free generator is going to help you if you send API calls both manually or in automation tests. " +
      "Make your testing more pleasant by avoiding boring moments of creating data for your testing.",
    icon: ["fas", "list-alt"],
    path: "/file-translator/",
    name: "file-translator",
    meta: {
      layout: "main",
      title: "Random Data Generator Tool Online",
      tag: "This Generator will allow you to create any data you may need for your testing purposes. " +
        "For example, if you need to create a body for your API request, this Generator will do it for you in seconds!"
    },
    component: FileTranslator
  },
  {
    title: "Link Translator",
    subTitle: "Create any data sets you need",
    description: "If you have ever worked with API testing, you must know that it may take so much time to create the " +
      "body with the exact data you need for your API requests! " +
      "Well, we have handled this problem for you. With this random Data Generator Tool Online, you can create " +
      "always any data you need in a couple of clicks. And it is free! It is now easy for you to generate extra keys, etc. " +
      "We tried our best to make it very flexible and simple for making samples or dumb data for your testing purposes. " +
      "And what is most amazing, this free generator is going to help you if you send API calls both manually or in automation tests. " +
      "Make your testing more pleasant by avoiding boring moments of creating data for your testing.",
    icon: ["fas", "list-alt"],
    path: "/link-translator/",
    name: "link-translator",
    meta: {
      layout: "main",
      title: "Random Data Generator Tool Online",
      tag: "This Generator will allow you to create any data you may need for your testing purposes. " +
        "For example, if you need to create a body for your API request, this Generator will do it for you in seconds!"
    },
    component: LinkTranslator
  },


];

