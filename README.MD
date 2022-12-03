****PHẦN USER UI****
1) Tạo User UI >>	Mai Huong

2) Tự tạo api Product bằng MockAPI >> 	Tuyet Minh

3) Xây dựng lớp đối tượng Products	
Phần User UI - class	>> Mai Huong
Phần Admin UI - class	>>Tuyet Minh

4. Hiển thị danh sách sản phẩm cho khách hàng.	
Tạo một mảng ProductList ngoài global, viết hàm render tạo giao diện >> Mai Huong
Call axios lấy danh sách sản phẩm từ database, gán mảng sản phẩm trả về vào biến ProductList >> Tuyet Minh

5. Tạo một ô select cho phép người dùng filter theo loại sản phẩm, ô select có 2 option là samsung và iphone, viết hàm gắn vào sự kiện onChange của select	
Tạo ô select cho người dùng filter, có 2 option	>> Tuyet Minh
Viết hàm gắn sự kiện onChange cho select >> Mai Huong

5. Cho phép người dùng chọn sản phẩm bỏ vào giỏ hàng >> Tuyet Minh, Mai Huong

6. Không push trực tiếp sản phẩm được chọn vào mảng cart vì không có số lượng , tạo một đối tượng mới có định dạng sau rồi push vào mảng cart	>> Tuyet Minh, Mai Huong

7. Khi thêm sản phẩm vào giỏ hàng, nếu sản phẩm chưa có trong giỏ hàng thì push vào cart với quantity là 1, 
nếu đã có rồi thì ko push nữa mà chỉ tăng quantity lên 1 đơn vị	>> Tuyet Minh, Mai Huong

8. In giỏ hàng ra màn hình, viết hàm renderCart và duyệt mảng giỏ hàng, có bao nhiêu sản phẩm thì tạo ra bấy nhiêu tương ứng. >>	Mai Huong

9. Trong giao diện giỏ hàng, cho phép người dùng chỉnh sửa số lượng (gợi ý: cho 2 nút tăng giảm), 
viết hàm gắn vào 2 nút đó, khi nhấn vào thì truyền vào id, tìm trong mảng giỏ hàng xem sản phẩm đó nằm ở đâu, lấy quantity ra tăng hoặc giảm , 
sau đó render lại giao diện	>> Mai Huong

10. In tổng tiền ra giao diện. Trong hàm renderCart, tính tổng giá tiền của tất cả sản phẩm và hiện ra (giá tiền * số lượng) >> Mai Huong

11. Lưu giỏ hàng vào localstorage , lần sau khi vào trang sẽ load lên lại.	>> Mai Huong

13. Người dùng nhấn nút thanh toán, clear giỏ hàng, set mảng giỏ hàng về mảng rỗng []	>> Tuyet Minh

14. Cho phép người dùng remove sản phẩm ra khỏi giỏ hàng >> Tuyet Minh

***PHẦN ADMIN UI***
1) Tạo Admin UI	>> Tuyet Minh
2) Sử dụng Axios để xây dựng các chức năng cho admin (hiện danh sách, thêm, xóa, cập nhật sản phẩm)" >> Mai Huong
3) Kiểm tra validation >> Mai Huong
