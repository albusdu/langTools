$(document).ready(function () {
  /*lang tools script*/

  let userRoom = document.querySelector('.user-room .top')
  let userRoomItem = document.querySelectorAll('.user-room .item')

  if (userRoom != undefined && userRoomItem != undefined) {
    userRoom.onclick = function () {
      userRoom.parentElement.classList.toggle('active')
    }

    for (let i in userRoomItem) {
      userRoomItem[i].onclick = function () {
        this.parentElement.parentElement.classList.remove('active')

        userRoomItem.forEach(function (item) {
          item.style.display = 'flex'
          item.classList.remove('active')
        })

        this.style.display = 'none'
        this.classList.add('active')
        userRoom.innerHTML = this.innerHTML
        userRoom.classList.add('text-color')
        userRoom.children[0].setAttribute('class', 'path-color')

        let attr = this.getAttribute('data-index')

        let userToomBoxes = document.querySelectorAll('.user-room-item')
        userToomBoxes.forEach(function (box) {
          box.style.display = 'none'
        })

        let userRoomBox = document.querySelector(
          ".user-room-item[data-index='" + attr + "']"
        )
        userRoomBox.style.display = 'block'
      }
    }
  }

  let taskBocks = document.querySelectorAll('.task-sheet-2 .block')

  if (taskBocks != undefined) {
    $('.task-sheet-2 .block').each(function () {
      $(this).click(function () {
        $('.task-sheet-2 .block').not(this).parent().removeClass('open')
        $('.task-sheet-2 .block').not(this).next().slideUp(400)
        $(this).parent().toggleClass('open')
        $(this).next().slideToggle(400)
      })
    })
  }

  let AdminTaskBocks = document.querySelectorAll('.admin-task-sheet-2 .block')

  if (AdminTaskBocks != undefined) {
    $('.admin-task-sheet-2 .block').each(function () {
      $(this).click(function () {
        $('.admin-task-sheet-2 .block').not(this).parent().removeClass('open')
        $('.admin-task-sheet-2 .block').not(this).next().slideUp(400)
        $(this).parent().toggleClass('open')
        $(this).next().slideToggle(400)
      })
    })
  }

  let memberBtn = document.querySelectorAll('.member-btn')
  let member = document.querySelectorAll('.member')

  memberBtn.forEach(function (btn) {
    btn.onclick = function () {
      let attr = btn.getAttribute('data-index')
      member.forEach(function (member) {
        if (member.getAttribute('data-index') != attr) {
          member.classList.remove('open')
        }
      })
      btn.parentElement.classList.toggle('open')
    }
  })
})
