/*
@author Martin Chukaleski
A function that is used for the simultaneous upload after choosing the file, without pressing a submit button.
*/

function UploadFile(fileUpload) {
	if (fileUpload.value != '') {
		document.getElementById("<%=UploadButton.ClientID %>").click();
	}
}
