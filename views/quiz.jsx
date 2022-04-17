<html>

    <head>
        <title>Hello World!</title>

        <head>

            <body>
                <h1>Quiz</h1>
                <p>Questions:</p>
                <ol>
                    <%quiz.forEach((row, idx)=>{ %< <li>
                    <%=row.question%>
                        </li>
                        <%}%>
                </ol>
            </body>

        </html>