export async function insert(reply: ReplyModel): Promise<any | {status:number}> {
  // 실행
  try {
    const body = {
      id: reply.id,
      title: reply.score,
      content: reply.roomType
    };
    const response = await fetch('http://localhost:8080/replies', {
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