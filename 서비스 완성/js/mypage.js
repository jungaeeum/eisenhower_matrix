const deleteUserText = document.getElementById("deluser");

deleteUserText.addEventListener("click", deluser);

async function deluser(event, token) {
  const isValidReq = confirm(
    "회원탈퇴를 하시겠습니까? 회원정보가 영구적으로 삭제됩니다."
  );

  if (!isValidReq) {
    return false;
  }

  const config = {
    method: "delete",
    url: url + "/user" + userIdx,
    headers: { "x-access-token": token },
  };

  try {
    const res = await axios(config);

    if (res.data.code !== 200) {
      alert(res.data.message);
      return false;
    }

    localStorage.removeItem("x-access-token");
    alert(res.data.message);
    location.href = "index.html";
    return true;
  } catch (err) {
    console.error(err);
  }
}
