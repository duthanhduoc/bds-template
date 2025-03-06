export type Product = {
  id: string
  url: string
  title: string
  featuredImage: string
  images: string[]
  price: number
  address: string
  beds: number
  description: string // Added property for HTML description
  hidden: boolean
}

export type MenuItem = {
  title: string
  url: string
}

export type Page = {
  id: string
  slug: string
  title: string
  body: string
  bodySummary: string
  createdAt: string
  updatedAt: string
  seo?: {
    title?: string
    description?: string
  }
}

export const homepageItems: Product[] = [
  {
    id: '1',
    url: 'product-1',
    title: 'Luxury Villa',
    featuredImage:
      'https://images.pexels.com/photos/3705529/pexels-photo-3705529.jpeg',
    images: [
      'https://images.pexels.com/photos/3705529/pexels-photo-3705529.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
    ],
    price: 1500000,
    address: '123 Ocean View Drive, Malibu, CA 90265',
    beds: 5,
    description: `<div>
      <p>This stunning luxury villa offers breathtaking ocean views from nearly every room. With 5 spacious bedrooms and 6.5 bathrooms, this 7,500 sq ft property is perfect for those who appreciate the finer things in life.</p>
      <h3>Features:</h3>
      <ul>
        <li>Private infinity pool and spa</li>
        <li>Professional chef's kitchen with top-of-the-line appliances</li>
        <li>Home theater and wine cellar</li>
        <li>Floor-to-ceiling windows throughout</li>
        <li>Smart home technology</li>
      </ul>
      <p>Private beach access and a short drive to exclusive shopping and dining make this Malibu villa an exceptional find.</p>
    </div>`,
    hidden: true
  },
  {
    id: '2',
    url: 'product-2',
    title: 'Modern Apartment',
    featuredImage:
      'https://images.pexels.com/photos/271753/pexels-photo-271753.jpeg',
    images: [
      'https://images.pexels.com/photos/271753/pexels-photo-271753.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg'
    ],
    price: 350000,
    address: '456 Downtown Blvd, Unit 2401, Chicago, IL 60611',
    beds: 2,
    description: `<div>
      <p>Experience urban living at its finest in this contemporary 2-bedroom apartment in the heart of downtown Chicago. Located on the 24th floor, this unit offers spectacular city views and modern amenities.</p>
      <h3>Amenities:</h3>
      <ul>
        <li>Floor-to-ceiling windows with panoramic city views</li>
        <li>Open concept kitchen with premium finishes</li>
        <li>Building features include fitness center, rooftop lounge, and 24-hour concierge</li>
        <li>In-unit washer and dryer</li>
        <li>One parking space included</li>
      </ul>
      <p>Walking distance to the Magnificent Mile, restaurants, and public transportation.</p>
    </div>`,
    hidden: true
  },
  {
    id: '3',
    url: 'product-3',
    title: 'Beach House',
    featuredImage:
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg',
      'https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg'
    ],
    price: 850000,
    address: '789 Shoreline Road, Outer Banks, NC 27959',
    beds: 4,
    description: `<div>
      <p>This charming 4-bedroom beach house offers the perfect coastal getaway. Located just steps from the pristine beaches of the Outer Banks, this property combines comfort with seaside serenity.</p>
      <h3>Property Highlights:</h3>
      <ul>
        <li>Spacious deck with unobstructed ocean views</li>
        <li>Open floor plan with vaulted ceilings</li>
        <li>Recently renovated kitchen and bathrooms</li>
        <li>Outdoor shower and beach equipment storage</li>
        <li>Private walkway to beach</li>
      </ul>
      <p>Excellent rental history makes this an ideal investment or vacation home.</p>
    </div>`,
    hidden: true
  },
  {
    id: '4',
    url: 'product-4',
    title: 'Mountain Retreat',
    featuredImage:
      'https://images.pexels.com/photos/326650/pexels-photo-326650.jpeg',
    images: [
      'https://images.pexels.com/photos/326650/pexels-photo-326650.jpeg',
      'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg',
      'https://images.pexels.com/photos/30411810/pexels-photo-30411810/free-photo-of-nh-ng-m-u-ki-n-truc-ph-c-t-p-c-a-maroc-rabat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg'
    ],
    price: 1200000,
    address: '321 Alpine Way, Aspen, CO 81611',
    beds: 6,
    description: `<div>
      <p>Nestled in the majestic Rocky Mountains, this 6-bedroom mountain retreat offers year-round luxury and outdoor adventure. The timber and stone construction beautifully complements the natural surroundings.</p>
      <h3>Special Features:</h3>
      <ul>
        <li>Floor-to-ceiling stone fireplace in great room</li>
        <li>Gourmet kitchen with breakfast nook</li>
        <li>Home spa with sauna and hot tub</li>
        <li>Game room and home theater</li>
        <li>Heated driveway and 3-car garage</li>
      </ul>
      <p>Just minutes from world-class skiing, hiking trails, and the charming downtown of Aspen.</p>
    </div>`,
    hidden: true
  },
  {
    id: '5',
    url: 'product-5',
    title: 'Urban Loft',
    featuredImage:
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
    images: [
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg',
      'https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg'
    ],
    price: 650000,
    address: '555 Soho Street, New York, NY 10012',
    beds: 1,
    description: `<div>
      <p>Located in the heart of SoHo, this industrial-chic loft features soaring 14-foot ceilings, original cast-iron columns, and expansive windows that flood the space with natural light.</p>
      <h3>Details:</h3>
      <ul>
        <li>Original hardwood floors and exposed brick walls</li>
        <li>Custom kitchen with waterfall island and top-tier appliances</li>
        <li>Luxurious bathroom with rainfall shower and soaking tub</li>
        <li>Flexible floor plan with distinct living and sleeping areas</li>
        <li>Building includes elevator and part-time doorman</li>
      </ul>
      <p>Surrounded by art galleries, designer boutiques, and renowned restaurants in New York's most coveted neighborhood.</p>
    </div>`,
    hidden: true
  },
  {
    id: '6',
    url: 'product-6',
    title: 'Country Estate',
    featuredImage:
      'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg',
    images: [
      'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg',
      'https://images.pexels.com/photos/5353934/pexels-photo-5353934.jpeg',
      'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
      'https://images.pexels.com/photos/105933/pexels-photo-105933.jpeg'
    ],
    price: 2800000,
    address: '777 Rolling Hills Lane, Lexington, KY 40508',
    beds: 8,
    description: `<div>
      <p>This magnificent 8-bedroom country estate sits on 25 acres of pristine Kentucky bluegrass. The grand colonial-style main house dates back to 1920 and has been meticulously restored to preserve its historic charm while incorporating modern amenities.</p>
      <h3>Estate Features:</h3>
      <ul>
        <li>Formal gardens and mature landscaping</li>
        <li>Equestrian facilities including stables and riding ring</li>
        <li>Tennis court and swimming pool</li>
        <li>Guest cottage and caretaker's quarters</li>
        <li>Wine cellar and tasting room</li>
      </ul>
      <p>The property offers privacy and tranquility while being just a short drive from Lexington's amenities and the Kentucky Horse Park.</p>
    </div>`,
    hidden: true
  },
  {
    id: '7',
    url: 'product-7',
    title: 'Waterfront Cottage',
    featuredImage:
      'https://images.pexels.com/photos/5965833/pexels-photo-5965833.jpeg',
    images: [
      'https://images.pexels.com/photos/5965833/pexels-photo-5965833.jpeg',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      'https://images.pexels.com/photos/5439/earth-space.jpg'
    ],
    price: 495000,
    address: '888 Lakeside Drive, Lake Tahoe, NV 89449',
    beds: 3,
    description: `<div>
      <p>This charming 3-bedroom lakefront cottage offers a perfect blend of rustic charm and modern comfort. With 100 feet of private shoreline on Lake Tahoe, the views are unmatched.</p>
      <h3>Cottage Details:</h3>
      <ul>
        <li>Stone fireplace and vaulted wood-beam ceilings</li>
        <li>Updated kitchen with granite countertops</li>
        <li>Master suite with lake views and private deck</li>
        <li>Private dock and boathouse</li>
        <li>Outdoor entertaining area with fire pit</li>
      </ul>
      <p>Enjoy year-round activities including boating, swimming, skiing, and hiking, all from your own private retreat.</p>
    </div>`,
    hidden: true
  },
  {
    id: '8',
    url: 'product-8',
    title: 'Tropical Villa',
    featuredImage:
      'https://images.pexels.com/photos/4652246/pexels-photo-4652246.jpeg',
    images: [
      'https://images.pexels.com/photos/4652246/pexels-photo-4652246.jpeg',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      'https://images.pexels.com/photos/533998/pexels-photo-533998.jpeg'
    ],
    price: 1875000,
    address: '999 Palm Avenue, Miami Beach, FL 33139',
    beds: 5,
    description: `<div>
      <p>This stunning 5-bedroom tropical villa brings Bali-inspired luxury to Miami Beach. The indoor-outdoor living concept makes the most of the spectacular waterfront setting and year-round warm climate.</p>
      <h3>Villa Highlights:</h3>
      <ul>
        <li>Resort-style pool with waterfall features</li>
        <li>Outdoor kitchen and dining pavilion</li>
        <li>Private dock with ocean access</li>
        <li>Lush tropical landscaping for privacy</li>
        <li>Floor-to-ceiling glass doors that open completely</li>
      </ul>
      <p>Just minutes from South Beach's famous restaurants, shopping, and nightlife while offering a serene private retreat.</p>
    </div>`,
    hidden: true
  }
]

export const menu: MenuItem[] = [
  {
    title: 'Trang chủ',
    url: '/'
  },
  {
    title: 'Đang bán',
    url: '/dang-ban'
  },
  {
    title: 'Liên hệ',
    url: '/lien-he'
  }
]

export const pages: Page[] = [
  {
    id: '1',
    slug: 'dang-ban',
    title: 'Bất động sản đang bán',
    body: `<div>
      <p>Chúng tôi hiện đang có nhiều bất động sản đa dạng đang được rao bán trên toàn quốc. Từ căn hộ cao cấp đến biệt thự, nhà phố, đất nền - tất cả đều được chúng tôi lựa chọn kỹ lưỡng để mang đến cho khách hàng những sản phẩm chất lượng nhất.</p>
      <h2>Danh mục bất động sản</h2>
      <ul>
        <li>Căn hộ chung cư</li>
        <li>Nhà phố, biệt thự</li>
        <li>Đất nền dự án</li>
        <li>Bất động sản nghỉ dưỡng</li>
        <li>Bất động sản thương mại</li>
      </ul>
      <p>Chúng tôi cam kết mang đến dịch vụ tư vấn chuyên nghiệp, minh bạch về thông tin và pháp lý để khách hàng có thể an tâm khi lựa chọn bất động sản.</p>
      <h2>Chính sách bán hàng</h2>
      <p>Chúng tôi luôn có những chính sách bán hàng linh hoạt, hỗ trợ khách hàng tối đa trong quá trình giao dịch:</p>
      <ul>
        <li>Hỗ trợ vay ngân hàng lên đến 70% giá trị bất động sản</li>
        <li>Chia sẻ thông tin pháp lý minh bạch</li>
        <li>Tư vấn đầu tư chuyên nghiệp</li>
        <li>Hỗ trợ khách hàng trong suốt quá trình giao dịch</li>
      </ul>
    </div>`,
    bodySummary:
      'Thông tin về các bất động sản đang được rao bán và chính sách bán hàng của công ty chúng tôi.',
    createdAt: '2023-01-15T08:00:00Z',
    updatedAt: '2023-08-20T10:30:00Z',
    seo: {
      title: 'Bất động sản đang bán | Các dự án BĐS hot nhất hiện nay',
      description:
        'Danh sách các bất động sản đang được rao bán với đa dạng loại hình: căn hộ, biệt thự, nhà phố, đất nền...'
    }
  },
  {
    id: '2',
    slug: 'lien-he',
    title: 'Liên hệ với chúng tôi',
    body: `<div>
      <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ quý khách trong mọi vấn đề liên quan đến bất động sản. Đừng ngần ngại liên hệ với chúng tôi qua các kênh sau:</p>
      <h2>Thông tin liên hệ</h2>
      <ul>
        <li><strong>Địa chỉ:</strong> 123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</li>
        <li><strong>Điện thoại:</strong> (028) 1234 5678</li>
        <li><strong>Email:</strong> info@example.com</li>
        <li><strong>Giờ làm việc:</strong> Thứ 2 - Thứ 6: 8:00 - 17:30, Thứ 7: 8:00 - 12:00</li>
      </ul>
      <h2>Gửi yêu cầu</h2>
      <p>Nếu quý khách có bất kỳ câu hỏi hoặc yêu cầu cụ thể, vui lòng điền vào form liên hệ dưới đây. Đội ngũ tư vấn viên của chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
      <p>Chúng tôi cam kết bảo mật thông tin cá nhân của quý khách và chỉ sử dụng cho mục đích tư vấn.</p>
      <h2>Văn phòng chi nhánh</h2>
      <ul>
        <li><strong>Hà Nội:</strong> 45 Phố Lý Thường Kiệt, Quận Hoàn Kiếm</li>
        <li><strong>Đà Nẵng:</strong> 78 Đường Nguyễn Văn Linh, Quận Hải Châu</li>
        <li><strong>Nha Trang:</strong> 23 Đường Trần Phú</li>
      </ul>
    </div>`,
    bodySummary:
      'Thông tin liên hệ với công ty chúng tôi qua địa chỉ, điện thoại, email và form liên hệ.',
    createdAt: '2023-01-10T09:15:00Z',
    updatedAt: '2023-07-25T14:45:00Z',
    seo: {
      title: 'Liên hệ với chúng tôi | Tư vấn bất động sản 24/7',
      description:
        'Liên hệ ngay với đội ngũ tư vấn viên chuyên nghiệp của chúng tôi để được hỗ trợ về bất động sản.'
    }
  }
]
