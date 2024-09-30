import { View, Text, TouchableOpacity } from "react-native";
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";

export default function FileViewerSample() {
  const onPress = async () => {
    // These all formats are acceptable.

    // 'www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf';
    // 'https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc';
    // 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    //  'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx';
    // 'https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls';

    // Put your url here -----
    // const url =
    //   "https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc";
    const url =
      "https://res.cloudinary.com/di7b9ifgh/image/upload/v1727458611/Alternating_Curent_Notes_eiwsgv.pdf";
    // -----

    // this will split the whole url.
    const f2 = url.split("/");

    // then get the file name with extention.
    const fileName = f2[f2.length - 1];
    // const fileExtention = url.split(".")[3];

    // create a local file path from url
    const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    const options = {
      fromUrl: url,
      toFile: localFile,
    };

    // last step it will download open it with fileviewer.
    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(() => {
        // success
        // Here you can perform any of your completion tasks
      })
      .catch((error) => {
        // error
      });
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'red',
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{ backgroundColor: "gray", padding: 20 }}
      >
        <Text style={{ fontSize: 25 }}> App </Text>
      </TouchableOpacity>
    </View>
  );
}
