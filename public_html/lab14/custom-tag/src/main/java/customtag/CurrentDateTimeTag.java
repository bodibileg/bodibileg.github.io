package customtag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDateTimeTag extends SimpleTagSupport {
    private String color;
    private String size;

    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }

    @Override
    public void doTag() throws JspException, IOException {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");

        String formattedDate = ft.format(dNow);

        JspWriter out = getJspContext().getOut();
        out.write("<span style='color: " + color + "; font-size: " + size + ";'>" + formattedDate + "</span>");
    }
}
