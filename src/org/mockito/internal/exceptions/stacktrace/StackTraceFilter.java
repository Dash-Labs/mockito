/*
 * Copyright (c) 2007 Mockito contributors
 * This program is made available under the terms of the MIT License.
 */

package org.mockito.internal.exceptions.stacktrace;

import org.mockito.exceptions.stacktrace.StackTraceCleaner;
import org.mockito.internal.configuration.ClassPathLoader;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class StackTraceFilter implements Serializable {

    static final long serialVersionUID = -5499819791513105700L;

    private static StackTraceCleaner cleaner =
            ClassPathLoader.getStackTraceCleanerProvider().getStackTraceCleaner(new DefaultStackTraceCleaner());

    /**
     * Example how the filter works (+/- means good/bad):
     * [a+, b+, c-, d+, e+, f-, g+] -> [a+, b+, g+]
     * Basically removes all bad.
     */
    public StackTraceElement[] filter(StackTraceElement[] target, boolean keepTop) {
        List<StackTraceElement> filteredStackTrace = new ArrayList<StackTraceElement>();
        for (StackTraceElement stackTraceElement : target) {
            if (cleaner.isOut(stackTraceElement)) {
                continue;
            }
            filteredStackTrace.add(stackTraceElement);
        }
        return filteredStackTrace.toArray(new StackTraceElement[filteredStackTrace.size()]);
    }
}