export async function insert(hotel: HotelModel): Promise<any | {status:number}> {
  // 실행
  try {
    const body = {
      id: hotel.id,
      name: hotel.name,
    };
    const response = await fetch('http://localhost:8080/hotels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 소문자로 수정
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('There has been a problem:', error);
    return { status: 500 };
  }
}